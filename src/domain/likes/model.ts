import { GetMealQuery, GetLikeQuery } from 'API';

import getLikeList from './api/getLikeList'

export type Like = Omit<Exclude<GetLikeQuery['getLike'], null>, '__typename'>;

class Likes {
    public async getAll(): Promise<Like[]> {
        return getLikeList()
    }
}

export const LikesModel = new Likes()
