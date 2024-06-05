// user.entity.ts
export class User {
  id: number;
  name: string;
  age: number;
}

// create-user.dto.ts
export class CreateUserDto {
  name: string;
  age: number;
}

// update-user.dto.ts
export class UpdateUserDto {
  name?: string;
  age?: number;
}
