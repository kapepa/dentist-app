import { UserDto } from './user.dto.tsx';

export class GroopDto {
  date: string,
  items: GroopItemDto[],
}

export class GroopItemDto {
  diagnostics: string,
  price: number,
  position: number,
  time: string,
  end: string,
  user: UserDto,
}