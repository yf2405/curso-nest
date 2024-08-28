import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private _users = [
        {
            id:1,
            name: 'John',
            phone:'123',
        },
        {
            id:2,
            name: 'Doe',
            phone:'123',
        }
    ];
    getUsers(){
        return this._users;
    }
}
