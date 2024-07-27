"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userServices = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const createAdminIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(payload);
    const userData = {
        firstName: payload.firstName,
        lastName: payload.lastName,
        username: payload.username,
        email: payload.admin.email,
        password: payload.password,
        role: payload.role,
    };
    const result = yield prisma_1.default.$transaction((transactionClient) => __awaiter(void 0, void 0, void 0, function* () {
        const createdUserData = yield transactionClient.user.create({
            data: userData
        });
        const createAdminData = yield transactionClient.admin.create({
            data: payload.admin
        });
    }));
});
const getAllUsersFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield prisma_1.default.user.findMany();
        return result;
    }
    catch (error) {
        throw new Error(`Could not get users: ${error.message}`);
    }
});
exports.userServices = {
    createAdminIntoDB, getAllUsersFromDB
};
