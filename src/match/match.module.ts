import { Module } from '@nestjs/common';
import { MatchController } from './match.controller';
import { MatchService } from './match.service';
import { ImportMatchesUseCase } from './use-cases/import-matches.use-case';

@Module({
  imports: [],
  controllers: [MatchController],
  providers: [MatchService, ImportMatchesUseCase],
})
export class MatchModule {}
