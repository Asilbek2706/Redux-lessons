import type { IUser } from '../shared/interfaces/user.interface';

export const fetchUserById = (id: string) => {
  return new Promise<IUser>((resolve) => {
    setTimeout(() => {
      resolve({
        id,
        name: 'Asilbek Karomatov',
        roles: ['admin'],
      });
    }, 2000);
  });
};
