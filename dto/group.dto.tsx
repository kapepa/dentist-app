import { UserDto } from './user.dto.tsx';

export class GroopDto {
  date: string,
  items: GroopItemDto[],
}

export class GroopItemDto {
  diagnostics: string,
  time: string,
  user: UserDto,
}