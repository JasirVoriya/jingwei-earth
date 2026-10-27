import {test} from 'node:test';
import assert from 'node:assert/strict';
let core={};try{core=await import('../dist/core.mjs')}catch{}
test('year filter includes conflicts on both boundary years',()=>{assert.equal(typeof core.filterWars,'function');const wars=[{start:1914,end:1918,region:'欧洲',name:'第一次世界大战',tags:['全球']}];assert.equal(core.filterWars(wars,{year:1914}).length,1);assert.equal(core.filterWars(wars,{year:1918}).length,1);assert.equal(core.filterWars(wars,{year:1919}).length,0);assert.equal(core.filterWars(wars,{query:'不存在'}).length,0)});
test('projection maps prime meridian and equator to map center',()=>{assert.equal(typeof core.project,'function');assert.deepEqual(core.project([0,0]),[540,270]);assert.deepEqual(core.project([-180,90]),[0,0])});
test('grading rejects unanswered and detects correct option',()=>{assert.equal(typeof core.grade,'function');assert.equal(core.grade({answer:2},null),false);assert.equal(core.grade({answer:2},2),true);assert.equal(core.grade({answer:2},1),false)});
