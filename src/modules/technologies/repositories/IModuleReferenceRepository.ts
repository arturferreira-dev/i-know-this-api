import { ICreateModuleReferenceDto } from '../dto/ICreateModuleReferenceDto';
import { IUpdateModuleReferenceDto } from '../dto/IUpdateModuleReferenceDto';
import { ModuleReference } from '../infra/typeorm/entities/ModuleReference';

export interface IModuleReferenceRepository {
  findAll(): Promise<ModuleReference[]>;
  findById(id): Promise<ModuleReference | undefined>;
  update(data: IUpdateModuleReferenceDto): Promise<ModuleReference | undefined>;
  findByTitle(title): Promise<ModuleReference | undefined>;
  create(data: ICreateModuleReferenceDto): Promise<ModuleReference>;
  delete(id): Promise<void>;
}
