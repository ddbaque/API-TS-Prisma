import { Request, Response } from "express";

import prisma from "../db";

export const getAllTeams = async (req: Request, res: Response) => {
    const allTeams = await prisma.team.findMany({
        include: {
            players: true,
        },
    });
    console.log(allTeams[1].players)
    res.send(allTeams);
};

export const getTeamById = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const teamById = await prisma.team.findFirst({
        where: {
            id,
        },
        include: {
            players: true,
        },
    });
    res.json(teamById);
};

export const createTeam = async (req: Request, res: Response) => {
    console.log("Hola",req.body)
    const newProduct = await prisma.team.create({
        data: req.body,
    });
    res.json(newProduct); 
};

export const updateTeamById = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const updatedTeam = await prisma.team.update({
        where: {
            id,
        },
        data: req.body,
    });
    res.json(updatedTeam);
};

export const deleteTeamById = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const deletedTeamById = await prisma.team.delete({
        where: {
            id,
        },
    });
    res.json(deletedTeamById);
};
