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
exports.deleteTeamById = exports.updateTeamById = exports.createTeam = exports.getTeamById = exports.getAllTeams = void 0;
const db_1 = __importDefault(require("../db"));
const getAllTeams = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const allTeams = yield db_1.default.team.findMany({
        include: {
            players: true,
        },
    });
    console.log(allTeams[1].players);
    res.send(allTeams);
});
exports.getAllTeams = getAllTeams;
const getTeamById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = +req.params.id;
    const teamById = yield db_1.default.team.findFirst({
        where: {
            id,
        },
        include: {
            players: true,
        },
    });
    res.json(teamById);
});
exports.getTeamById = getTeamById;
const createTeam = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newProduct = yield db_1.default.team.create({
        data: req.body,
    });
    res.json(newProduct);
});
exports.createTeam = createTeam;
const updateTeamById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = +req.params.id;
    const updatedTeam = yield db_1.default.team.update({
        where: {
            id,
        },
        data: req.body,
    });
    res.json(updatedTeam);
});
exports.updateTeamById = updateTeamById;
const deleteTeamById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = +req.params.id;
    const deletedTeamById = yield db_1.default.team.delete({
        where: {
            id,
        },
    });
    res.json(deletedTeamById);
});
exports.deleteTeamById = deleteTeamById;
//# sourceMappingURL=team.controllers.js.map