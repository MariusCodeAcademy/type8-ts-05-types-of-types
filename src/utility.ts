console.log('utility.ts');

interface OurUser {
  readonly id: number;
  name: string;
  username?: string | undefined;
  email: string;
  isOnline: boolean;
  favoriteColors?: string[];
  likesSports?: boolean;
}
// tipa su vosom savybem kaip ir OurUser bet neprivalomom
type OptionalOurUser = Partial<OurUser>;

const opUser: OptionalOurUser = {
  name: 'Mike',
};

type ReqUser = Required<OurUser>;

const user2: OurUser = {
  id: 2,
  name: 'James',
  email: 'James@bas.com',
  isOnline: true,
};

const user1: ReqUser = {
  id: 1,
  name: 'Serbentautas',
  username: 'Serbas',
  email: 'ser@bas.com',
  isOnline: false,
  favoriteColors: ['red', 'yellow', 'green'],
  likesSports: true,
};
// user1.id = 5; // err
