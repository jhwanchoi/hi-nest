import { Controller, Get, Post, Delete, Patch, Param, Body, Query } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/Movie.entity'
import { CreateMovieDto } from './dto/create_movie.dto';
import { UpdateMovieDto } from './dto/update_movie.dto';

@Controller('movies')
export class MoviesController {

    constructor(private readonly movieService: MoviesService) {}

    @Get()
    getAll(): Movie[]{
        return this.movieService.getAll();
    }

    @Get("/:id")
    getOne(@Param("id") id:number): Movie {
        return this.movieService.getOne(id);    
    }

    @Post()
    create(@Body() data: CreateMovieDto) {
        return this.movieService.create(data);
    }

    @Delete("/:id")
    remove(@Param("id") id:number) {
        return this.movieService.deleteOne(id);
    }

    @Patch("/:id")
    patch(@Param("id") id:number, @Body() updateData:UpdateMovieDto) {
        return this.movieService.update(id, updateData);
    }
}
