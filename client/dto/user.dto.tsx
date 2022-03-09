import GroopItemDto from './group.dto.tsx'

export class UserDto {
  _id: string,
  name: string,
  avatar: string,
  phone: string,
  diagnostics: GroopItemDto[],
  updatedAt: Date,
  createdAt: Date,
}