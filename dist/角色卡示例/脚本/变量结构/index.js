import * as __WEBPACK_EXTERNAL_MODULE_https_testingcf_jsdelivr_net_gh_StageDog_tavern_resource_dist_util_mvu_zod_js_8998c919__ from "https://testingcf.jsdelivr.net/gh/StageDog/tavern_resource/dist/util/mvu_zod.js";

var __webpack_modules__ = {
  "./示例/角色卡示例/schema.ts"(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
    eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Schema: () => (/* binding */ Schema)\n/* harmony export */ });\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zod */ \"zod\");\n\nconst Schema = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({\n    世界: zod__WEBPACK_IMPORTED_MODULE_0__.z.object({\n        当前时间: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),\n        当前地点: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),\n        近期事务: zod__WEBPACK_IMPORTED_MODULE_0__.z.record(zod__WEBPACK_IMPORTED_MODULE_0__.z.string().describe('事务名'), zod__WEBPACK_IMPORTED_MODULE_0__.z.string().describe('事务描述')),\n    }),\n    白娅: zod__WEBPACK_IMPORTED_MODULE_0__.z\n        .object({\n        依存度: zod__WEBPACK_IMPORTED_MODULE_0__.z.coerce.number().transform(v => _.clamp(v, 0, 100)),\n        着装: zod__WEBPACK_IMPORTED_MODULE_0__.z.record(zod__WEBPACK_IMPORTED_MODULE_0__.z.enum(['上装', '下装', '内衣', '袜子', '鞋子', '饰品']), zod__WEBPACK_IMPORTED_MODULE_0__.z.string().describe('服装描述')),\n        称号: zod__WEBPACK_IMPORTED_MODULE_0__.z.record(zod__WEBPACK_IMPORTED_MODULE_0__.z.string().describe('称号名'), zod__WEBPACK_IMPORTED_MODULE_0__.z.object({\n            效果: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),\n            自我评价: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),\n        })),\n    })\n        .transform(data => {\n        const $依存度阶段 = data.依存度 < 20\n            ? '消极自毁'\n            : data.依存度 < 40\n                ? '渴求注视'\n                : data.依存度 < 60\n                    ? '暗中靠近'\n                    : data.依存度 < 80\n                        ? '忐忑相依'\n                        : '柔软依存';\n        data.称号 = _(data.称号)\n            .entries()\n            .takeRight(Math.ceil(data.依存度 / 10))\n            .fromPairs()\n            .value();\n        return { ...data, $依存度阶段 };\n    }),\n    主角: zod__WEBPACK_IMPORTED_MODULE_0__.z.object({\n        物品栏: zod__WEBPACK_IMPORTED_MODULE_0__.z\n            .record(zod__WEBPACK_IMPORTED_MODULE_0__.z.string().describe('物品名'), zod__WEBPACK_IMPORTED_MODULE_0__.z.object({\n            描述: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),\n            数量: zod__WEBPACK_IMPORTED_MODULE_0__.z.coerce.number(),\n        }))\n            .transform(data => _.pickBy(data, ({ 数量 }) => 数量 > 0)),\n    }),\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Olsic3JjOi8vdGF2ZXJuX2hlbHBlcl90ZW1wbGF0ZS/npLrkvosv6KeS6Imy5Y2h56S65L6LL3NjaGVtYS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgU2NoZW1hID0gei5vYmplY3Qoe1xuICDkuJbnlYw6IHoub2JqZWN0KHtcbiAgICDlvZPliY3ml7bpl7Q6IHouc3RyaW5nKCksXG4gICAg5b2T5YmN5Zyw54K5OiB6LnN0cmluZygpLFxuICAgIOi/keacn+S6i+WKoTogei5yZWNvcmQoei5zdHJpbmcoKS5kZXNjcmliZSgn5LqL5Yqh5ZCNJyksIHouc3RyaW5nKCkuZGVzY3JpYmUoJ+S6i+WKoeaPj+i/sCcpKSxcbiAgfSksXG5cbiAg55m95aiFOiB6XG4gICAgLm9iamVjdCh7XG4gICAgICDkvp3lrZjluqY6IHouY29lcmNlLm51bWJlcigpLnRyYW5zZm9ybSh2ID0+IF8uY2xhbXAodiwgMCwgMTAwKSksXG4gICAgICDnnYDoo4U6IHoucmVjb3JkKHouZW51bShbJ+S4iuijhScsICfkuIvoo4UnLCAn5YaF6KGjJywgJ+iinOWtkCcsICfpnovlrZAnLCAn6aWw5ZOBJ10pLCB6LnN0cmluZygpLmRlc2NyaWJlKCfmnI3oo4Xmj4/ov7AnKSksXG4gICAgICDnp7Dlj7c6IHoucmVjb3JkKFxuICAgICAgICB6LnN0cmluZygpLmRlc2NyaWJlKCfnp7Dlj7flkI0nKSxcbiAgICAgICAgei5vYmplY3Qoe1xuICAgICAgICAgIOaViOaenDogei5zdHJpbmcoKSxcbiAgICAgICAgICDoh6rmiJHor4Tku7c6IHouc3RyaW5nKCksXG4gICAgICAgIH0pLFxuICAgICAgKSxcbiAgICB9KVxuICAgIC50cmFuc2Zvcm0oZGF0YSA9PiB7XG4gICAgICBjb25zdCAk5L6d5a2Y5bqm6Zi25q61ID1cbiAgICAgICAgZGF0YS7kvp3lrZjluqYgPCAyMFxuICAgICAgICAgID8gJ+a2iOaegeiHquavgSdcbiAgICAgICAgICA6IGRhdGEu5L6d5a2Y5bqmIDwgNDBcbiAgICAgICAgICAgID8gJ+a4tOaxguazqOinhidcbiAgICAgICAgICAgIDogZGF0YS7kvp3lrZjluqYgPCA2MFxuICAgICAgICAgICAgICA/ICfmmpfkuK3pnaDov5EnXG4gICAgICAgICAgICAgIDogZGF0YS7kvp3lrZjluqYgPCA4MFxuICAgICAgICAgICAgICAgID8gJ+W/kOW/keebuOS+nSdcbiAgICAgICAgICAgICAgICA6ICfmn5Tova/kvp3lrZgnO1xuICAgICAgZGF0YS7np7Dlj7cgPSBfKGRhdGEu56ew5Y+3KVxuICAgICAgICAuZW50cmllcygpXG4gICAgICAgIC50YWtlUmlnaHQoTWF0aC5jZWlsKGRhdGEu5L6d5a2Y5bqmIC8gMTApKVxuICAgICAgICAuZnJvbVBhaXJzKClcbiAgICAgICAgLnZhbHVlKCk7XG4gICAgICByZXR1cm4geyAuLi5kYXRhLCAk5L6d5a2Y5bqm6Zi25q61IH07XG4gICAgfSksXG5cbiAg5Li76KeSOiB6Lm9iamVjdCh7XG4gICAg54mp5ZOB5qCPOiB6XG4gICAgICAucmVjb3JkKFxuICAgICAgICB6LnN0cmluZygpLmRlc2NyaWJlKCfnianlk4HlkI0nKSxcbiAgICAgICAgei5vYmplY3Qoe1xuICAgICAgICAgIOaPj+i/sDogei5zdHJpbmcoKSxcbiAgICAgICAgICDmlbDph486IHouY29lcmNlLm51bWJlcigpLFxuICAgICAgICB9KSxcbiAgICAgIClcbiAgICAgIC50cmFuc2Zvcm0oZGF0YSA9PiBfLnBpY2tCeShkYXRhLCAoeyDmlbDph48gfSkgPT4g5pWw6YePID4gMCkpLFxuICB9KSxcbn0pO1xuZXhwb3J0IHR5cGUgU2NoZW1hID0gei5vdXRwdXQ8dHlwZW9mIFNjaGVtYT47XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./%E7%A4%BA%E4%BE%8B/%E8%A7%92%E8%89%B2%E5%8D%A1%E7%A4%BA%E4%BE%8B/schema.ts\n\n}");
  },
  "./示例/角色卡示例/脚本/变量结构/index.ts"(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
    eval('{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var https_testingcf_jsdelivr_net_gh_StageDog_tavern_resource_dist_util_mvu_zod_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! https://testingcf.jsdelivr.net/gh/StageDog/tavern_resource/dist/util/mvu_zod.js */ "https://testingcf.jsdelivr.net/gh/StageDog/tavern_resource/dist/util/mvu_zod.js");\n/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../schema */ "./示例/角色卡示例/schema.ts");\n\n\n$(() => {\n    (0,https_testingcf_jsdelivr_net_gh_StageDog_tavern_resource_dist_util_mvu_zod_js__WEBPACK_IMPORTED_MODULE_0__.registerMvuSchema)(_schema__WEBPACK_IMPORTED_MODULE_1__.Schema);\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi/npLrkvosv6KeS6Imy5Y2h56S65L6LL+iEmuacrC/lj5jph4/nu5PmnoQvaW5kZXgudHMiLCJtYXBwaW5ncyI6Ijs7O0FBQW9IO0FBQzlFO0FBRXRDLENBQUMsQ0FBQyxHQUFHLEVBQUU7SUFDTCxnSUFBaUIsQ0FBQywyQ0FBTSxDQUFDLENBQUM7QUFDNUIsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbInNyYzovL3RhdmVybl9oZWxwZXJfdGVtcGxhdGUv56S65L6LL+inkuiJsuWNoeekuuS+iy/ohJrmnKwv5Y+Y6YeP57uT5p6EL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlZ2lzdGVyTXZ1U2NoZW1hIH0gZnJvbSAnaHR0cHM6Ly90ZXN0aW5nY2YuanNkZWxpdnIubmV0L2doL1N0YWdlRG9nL3RhdmVybl9yZXNvdXJjZS9kaXN0L3V0aWwvbXZ1X3pvZC5qcyc7XG5pbXBvcnQgeyBTY2hlbWEgfSBmcm9tICcuLi8uLi9zY2hlbWEnO1xuXG4kKCgpID0+IHtcbiAgcmVnaXN0ZXJNdnVTY2hlbWEoU2NoZW1hKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./%E7%A4%BA%E4%BE%8B/%E8%A7%92%E8%89%B2%E5%8D%A1%E7%A4%BA%E4%BE%8B/%E8%84%9A%E6%9C%AC/%E5%8F%98%E9%87%8F%E7%BB%93%E6%9E%84/index.ts\n\n}');
  },
  "https://testingcf.jsdelivr.net/gh/StageDog/tavern_resource/dist/util/mvu_zod.js"(module) {
    module.exports = __WEBPACK_EXTERNAL_MODULE_https_testingcf_jsdelivr_net_gh_StageDog_tavern_resource_dist_util_mvu_zod_js_8998c919__;
  },
  zod(module) {
    module.exports = z;
  }
};

const __webpack_module_cache__ = {};

function __webpack_require__(moduleId) {
  const cachedModule = __webpack_module_cache__[moduleId];
  if (cachedModule !== undefined) {
    return cachedModule.exports;
  }
  const module = __webpack_module_cache__[moduleId] = {
    exports: {}
  };
  if (!(moduleId in __webpack_modules__)) {
    delete __webpack_module_cache__[moduleId];
    const e = new Error("Cannot find module '" + moduleId + "'");
    e.code = "MODULE_NOT_FOUND";
    throw e;
  }
  __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
  return module.exports;
}

__webpack_require__.d = (exports, definition) => {
  for (var key in definition) {
    if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: definition[key]
      });
    }
  }
};

__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);

__webpack_require__.r = exports => {
  Object.defineProperties(exports, {
    [Symbol.toStringTag]: {
      value: "Module"
    },
    __esModule: {
      value: true
    }
  });
};

let __webpack_exports__ = __webpack_require__("./示例/角色卡示例/脚本/变量结构/index.ts");