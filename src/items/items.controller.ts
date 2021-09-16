import {
  Controller,
  Get,
  Post,
  Put,
  Patch,
  Delete,
  Param,
} from '@nestjs/common';
import { ItemsService } from './items.service';
import { createItemDTO } from './DTO/create-item-dto';

@Controller('items')
export class ItemsController {
  constructor(private readonly issuesService: ItemsService) {}

  @Get()
  async findAll() {
    const issues = await this.issuesService.findAll();
    return issues;
  }

  //   @Get(':id')
  //   async findOne(@Param('id') id) {
  //     const issue = await this.issuesService.findOne(id);
  //     return issue;
  //   }

  @Post()
  async create(@Body() createItemDTO: createItemDTO): string {
    return `Name: ${createItemDTO.name} Description: ${createItemDTO.description}`;
  }

  //   @Post()
  //   async create(@Body() createItemDTO: createItemDTO) {
  //       const issue = await this.issuesService.create(createItemDTO);
  //       return issue;
  //   }

  // //endpoint for delete is /issues/?issueId=4
  // @Delete()
  // async delete(@Query() query) {
  //     const issues = await this.issuesService.delete(query.issueId);
  //     return issues;
  // }

  // @Put(':id')
  // async update(@Body() createItemDTO: createItemDTO, @Param('id') id) {
  //     const issues = this.issuesService.update(createItemDTO, id);
  //     return issues
  // }
}
