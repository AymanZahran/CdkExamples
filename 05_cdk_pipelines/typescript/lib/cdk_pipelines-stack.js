"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CdkPipelinesStack = void 0;
const aws_cdk_lib_1 = require("aws-cdk-lib");
const codecommit = require("aws-cdk-lib/aws-codecommit");
const pipelines_1 = require("aws-cdk-lib/pipelines");
const pipeline_stage_1 = require("./pipeline-stage");
class CdkPipelinesStack extends aws_cdk_lib_1.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        const repo = new codecommit.Repository(this, 'cdkPipelinesRepo', {
            repositoryName: "cdkPipelinesRepo"
        });
        const pipeline = new pipelines_1.CodePipeline(this, 'Pipeline', {
            pipelineName: 'WorkshopPipeline',
            synth: new pipelines_1.CodeBuildStep('SynthStep', {
                input: pipelines_1.CodePipelineSource.codeCommit(repo, 'master'),
                installCommands: [
                    'npm install -g aws-cdk'
                ],
                commands: [
                    'npm ci',
                    'npm run build',
                    'npx cdk synth'
                ]
            })
        });
        const deploy = new pipeline_stage_1.PipelineStage(this, 'Deploy');
        const deployStage = pipeline.addStage(deploy);
    }
}
exports.CdkPipelinesStack = CdkPipelinesStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrX3BpcGVsaW5lcy1zdGFjay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNka19waXBlbGluZXMtc3RhY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsNkNBQWdEO0FBRWhELHlEQUF5RDtBQUN6RCxxREFBc0Y7QUFDdEYscURBQStDO0FBRS9DLE1BQWEsaUJBQWtCLFNBQVEsbUJBQUs7SUFDMUMsWUFBWSxLQUFnQixFQUFFLEVBQVUsRUFBRSxLQUFrQjtRQUMxRCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUV4QixNQUFNLElBQUksR0FBRyxJQUFJLFVBQVUsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLGtCQUFrQixFQUFFO1lBQy9ELGNBQWMsRUFBRSxrQkFBa0I7U0FDbkMsQ0FBQyxDQUFDO1FBRUgsTUFBTSxRQUFRLEdBQUcsSUFBSSx3QkFBWSxDQUFDLElBQUksRUFBRSxVQUFVLEVBQUU7WUFDbEQsWUFBWSxFQUFFLGtCQUFrQjtZQUNoQyxLQUFLLEVBQUUsSUFBSSx5QkFBYSxDQUFDLFdBQVcsRUFBRTtnQkFDOUIsS0FBSyxFQUFFLDhCQUFrQixDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDO2dCQUNwRCxlQUFlLEVBQUU7b0JBQ2Isd0JBQXdCO2lCQUMzQjtnQkFDRCxRQUFRLEVBQUU7b0JBQ04sUUFBUTtvQkFDUixlQUFlO29CQUNmLGVBQWU7aUJBQ2xCO2FBQ0osQ0FDSjtTQUNGLENBQUMsQ0FBQztRQUVILE1BQU0sTUFBTSxHQUFHLElBQUksOEJBQWEsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDakQsTUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNoRCxDQUFDO0NBQ0Y7QUEzQkQsOENBMkJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RhY2ssIFN0YWNrUHJvcHMgfSBmcm9tICdhd3MtY2RrLWxpYic7XG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNvZGVjb21taXQgZnJvbSAnYXdzLWNkay1saWIvYXdzLWNvZGVjb21taXQnO1xuaW1wb3J0IHtDb2RlQnVpbGRTdGVwLCBDb2RlUGlwZWxpbmUsIENvZGVQaXBlbGluZVNvdXJjZX0gZnJvbSBcImF3cy1jZGstbGliL3BpcGVsaW5lc1wiO1xuaW1wb3J0IHtQaXBlbGluZVN0YWdlfSBmcm9tICcuL3BpcGVsaW5lLXN0YWdlJztcblxuZXhwb3J0IGNsYXNzIENka1BpcGVsaW5lc1N0YWNrIGV4dGVuZHMgU3RhY2sge1xuICBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wcz86IFN0YWNrUHJvcHMpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHByb3BzKTtcblxuICAgIGNvbnN0IHJlcG8gPSBuZXcgY29kZWNvbW1pdC5SZXBvc2l0b3J5KHRoaXMsICdjZGtQaXBlbGluZXNSZXBvJywge1xuICAgICAgcmVwb3NpdG9yeU5hbWU6IFwiY2RrUGlwZWxpbmVzUmVwb1wiXG4gICAgfSk7XG5cbiAgICBjb25zdCBwaXBlbGluZSA9IG5ldyBDb2RlUGlwZWxpbmUodGhpcywgJ1BpcGVsaW5lJywge1xuICAgICAgcGlwZWxpbmVOYW1lOiAnV29ya3Nob3BQaXBlbGluZScsXG4gICAgICBzeW50aDogbmV3IENvZGVCdWlsZFN0ZXAoJ1N5bnRoU3RlcCcsIHtcbiAgICAgICAgICAgICAgaW5wdXQ6IENvZGVQaXBlbGluZVNvdXJjZS5jb2RlQ29tbWl0KHJlcG8sICdtYXN0ZXInKSxcbiAgICAgICAgICAgICAgaW5zdGFsbENvbW1hbmRzOiBbXG4gICAgICAgICAgICAgICAgICAnbnBtIGluc3RhbGwgLWcgYXdzLWNkaydcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgY29tbWFuZHM6IFtcbiAgICAgICAgICAgICAgICAgICducG0gY2knLFxuICAgICAgICAgICAgICAgICAgJ25wbSBydW4gYnVpbGQnLFxuICAgICAgICAgICAgICAgICAgJ25weCBjZGsgc3ludGgnXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICApXG4gICAgfSk7XG5cbiAgICBjb25zdCBkZXBsb3kgPSBuZXcgUGlwZWxpbmVTdGFnZSh0aGlzLCAnRGVwbG95Jyk7XG4gICAgY29uc3QgZGVwbG95U3RhZ2UgPSBwaXBlbGluZS5hZGRTdGFnZShkZXBsb3kpO1xuICB9XG59XG4iXX0=