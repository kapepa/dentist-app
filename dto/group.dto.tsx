import { UserDto } from './user.dto.tsx';

export default class GroopDto {
  date: string,
  items: GroopItemDto[],
}

export default class GroopItemDto {
  diagnostics: string,
  time: string,
  user: UserDto,
}