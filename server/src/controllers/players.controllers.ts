import { Response, Request } from "express";

import prisma from "../db";

export const getAllPlayers = async (req: Request, res: Response) => {
    const allPlayers = await prisma.player.findMany({
        include: {
            team: true,
        },
    });
    res.json(allPlayers);
};

export const getPlayerById = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const playerById = await prisma.player.findFirst({
        where: {
            id,
        },
    });

    res.json(playerById);
};

export const createPlayer = async (req: Request, res: Response) => {
    const newPlayer = await prisma.player.create({
        data: req.body,
    });
    res.json(newPlayer);
};

export const updatePlayerById = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const updatedPlayer = await prisma.player.update({
        where: {
            id,
        },
        data: req.body,
    });

    res.json(updatedPlayer);
};

export const deletePlayerById = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const deletedPlayer = await prisma.player.delete({
        where: {
            id,
        },
    });
    res.json(deletedPlayer);
};
