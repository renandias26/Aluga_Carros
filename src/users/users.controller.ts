import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/create-user-dto';
import { AuthGuard } from '../auth/auth.guard';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Post()
    create(@Body() createUserDto: CreateUserDto) {
        return this.usersService.create(createUserDto)
    }

    @Put(':userID')
    update(@Param('userID') userID: string, @Body() createUserDto: CreateUserDto) {
        return this.usersService.update(userID, createUserDto)
    }

    @UseGuards(AuthGuard)
    @Delete(':userID')
    delete(@Param('userID') userID: string) {
        return this.usersService.delete(userID)
    }

    @Get(':userID')
    findOne(@Param('userID') userID: string) {
        try {
            return this.usersService.findOne(userID)
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: 'This is a custom message'
            },
                HttpStatus.FORBIDDEN,
                {
                    cause: error
                }
            )
        }
    }

    @Get()
    findAll() {
        return this.usersService.findAll()
    }
}
