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
exports.deletePlayerById = exports.updatePlayerById = exports.createPlayer = exports.getPlayerById = exports.getAllPlayers = void 0;
const db_1 = __importDefault(require("../db"));
const getAllPlayers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const allPlayers = yield db_1.default.player.findMany({
        include: {
            team: true,
        },
    });
    res.json(allPlayers);
});
exports.getAllPlayers = getAllPlayers;
const getPlayerById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = +req.params.id;
    const playerById = yield db_1.default.player.findFirst({
        where: {
            id,
        },
    });
    res.json(playerById);
});
exports.getPlayerById = getPlayerById;
const createPlayer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newPlayer = yield db_1.default.player.create({
        data: req.body,
    });
    res.json(newPlayer);
});
exports.createPlayer = createPlayer;
const updatePlayerById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = +req.params.id;
    const updatedPlayer = yield db_1.default.player.update({
        where: {
            id,
        },
        data: req.body,
    });
    res.json(updatedPlayer);
});
exports.updatePlayerById = updatePlayerById;
const deletePlayerById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = +req.params.id;
    const deletedPlayer = yield db_1.default.player.delete({
        where: {
            id,
        },
    });
    res.json(deletedPlayer);
});
exports.deletePlayerById = deletePlayerById;
//# sourceMappingURL=players.controllers.js.map