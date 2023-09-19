import {
  IsBoolean,
  IsDateString,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Role } from '../../role/role.entity';

export class SearchDataDto {
  @ApiProperty()
  @IsOptional()
  @IsString()
  searchData?: string;
}
export class CreateUserDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  username: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  password: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  fullName: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  phone: string;

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  gender: boolean;

  @ApiProperty()
  @IsOptional()
  @IsString()
  image: string;

  @ApiProperty()
  @IsOptional()
  @IsDateString()
  dateOfBirth: Date;

  @ApiProperty()
  @IsOptional()
  roleIds: string[];

  // @ApiProperty()
  // @IsNotEmpty()
  // @IsEnum(UserStatus)
  // status?: UserStatus;
}

export class UpdateUserDto {
  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  fullName: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsEmail()
  email: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsBoolean()
  gender: boolean;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  image: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  status: string;
}

export class UpdateUserStatusDto {
  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  fullName: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsEmail()
  email: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsBoolean()
  gender: boolean;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  image: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  status: string;
}

export class GetUserDto {
  id: string;
  username: string;
  fullName: string;
  email?: string;
  gender: boolean;
  image: string;
  dateOfBirth: Date;
  roles?: string[];
  createdAt: Date;
  status: string;
}

export class GetListUserDto {
  data: GetUserDto[];
}
