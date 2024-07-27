"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryEnum = exports.carStatusEnum = void 0;
// carStatusEnum (recommended for consistency)
var carStatusEnum;
(function (carStatusEnum) {
    carStatusEnum["pending"] = "pending";
    carStatusEnum["live"] = "live";
    carStatusEnum["sold"] = "sold";
})(carStatusEnum || (exports.carStatusEnum = carStatusEnum = {}));
// categoryEnum (recommended for consistency)
var categoryEnum;
(function (categoryEnum) {
    categoryEnum["weeklyHighlights"] = "weeklyHighlights";
    categoryEnum["supercars"] = "supercars";
    categoryEnum["jdmLeagends"] = "jdmLeagends";
    categoryEnum["airCoooled"] = "airCoooled";
    categoryEnum["offRoadExplorer"] = "offRoadExplorer";
    categoryEnum["twoWheels"] = "twoWheels";
})(categoryEnum || (exports.categoryEnum = categoryEnum = {}));
