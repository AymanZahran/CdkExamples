"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerlessFargatePipelineStack = void 0;
const aws_cdk_lib_1 = require("aws-cdk-lib");
const codecommit = require("aws-cdk-lib/aws-codecommit");
const pipelines_1 = require("aws-cdk-lib/pipelines");
const serverless_stage_1 = require("./serverless-stage");
const fargate_stage_1 = require("./fargate-stage");
class ServerlessFargatePipelineStack extends aws_cdk_lib_1.Stack {
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
        const serverless = new serverless_stage_1.ServerlessStage(this, 'ServerlessStage');
        const serverless_stage = pipeline.addStage(serverless);
        const fargate = new fargate_stage_1.FargateStage(this, 'FargateStage');
        const fargate_stage = pipeline.addStage(fargate);
    }
}
exports.ServerlessFargatePipelineStack = ServerlessFargatePipelineStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVybGVzc19mYXJnYXRlX3BpcGVsaW5lLXN0YWNrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2VydmVybGVzc19mYXJnYXRlX3BpcGVsaW5lLXN0YWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDZDQUFnRDtBQUVoRCx5REFBeUQ7QUFDekQscURBQXNGO0FBQ3RGLHlEQUFtRDtBQUNuRCxtREFBNkM7QUFFN0MsTUFBYSw4QkFBK0IsU0FBUSxtQkFBSztJQUN2RCxZQUFZLEtBQWdCLEVBQUUsRUFBVSxFQUFFLEtBQWtCO1FBQzFELEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRXhCLE1BQU0sSUFBSSxHQUFHLElBQUksVUFBVSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsa0JBQWtCLEVBQUU7WUFDL0QsY0FBYyxFQUFFLGtCQUFrQjtTQUNuQyxDQUFDLENBQUM7UUFFSCxNQUFNLFFBQVEsR0FBRyxJQUFJLHdCQUFZLENBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRTtZQUNsRCxZQUFZLEVBQUUsa0JBQWtCO1lBQ2hDLEtBQUssRUFBRSxJQUFJLHlCQUFhLENBQUMsV0FBVyxFQUFFO2dCQUM5QixLQUFLLEVBQUUsOEJBQWtCLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUM7Z0JBQ3BELGVBQWUsRUFBRTtvQkFDYix3QkFBd0I7aUJBQzNCO2dCQUNELFFBQVEsRUFBRTtvQkFDTixRQUFRO29CQUNSLGVBQWU7b0JBQ2YsZUFBZTtpQkFDbEI7YUFDSixDQUNKO1NBQ0YsQ0FBQyxDQUFDO1FBRUgsTUFBTSxVQUFVLEdBQUcsSUFBSSxrQ0FBZSxDQUFDLElBQUksRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1FBQ2hFLE1BQU0sZ0JBQWdCLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUV2RCxNQUFNLE9BQU8sR0FBRyxJQUFJLDRCQUFZLENBQUMsSUFBSSxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBQ3ZELE1BQU0sYUFBYSxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbkQsQ0FBQztDQUNGO0FBOUJELHdFQThCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0YWNrLCBTdGFja1Byb3BzIH0gZnJvbSAnYXdzLWNkay1saWInO1xuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjb2RlY29tbWl0IGZyb20gJ2F3cy1jZGstbGliL2F3cy1jb2RlY29tbWl0JztcbmltcG9ydCB7Q29kZUJ1aWxkU3RlcCwgQ29kZVBpcGVsaW5lLCBDb2RlUGlwZWxpbmVTb3VyY2V9IGZyb20gXCJhd3MtY2RrLWxpYi9waXBlbGluZXNcIjtcbmltcG9ydCB7U2VydmVybGVzc1N0YWdlfSBmcm9tICcuL3NlcnZlcmxlc3Mtc3RhZ2UnO1xuaW1wb3J0IHtGYXJnYXRlU3RhZ2V9IGZyb20gJy4vZmFyZ2F0ZS1zdGFnZSc7XG5cbmV4cG9ydCBjbGFzcyBTZXJ2ZXJsZXNzRmFyZ2F0ZVBpcGVsaW5lU3RhY2sgZXh0ZW5kcyBTdGFjayB7XG4gIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzPzogU3RhY2tQcm9wcykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwgcHJvcHMpO1xuXG4gICAgY29uc3QgcmVwbyA9IG5ldyBjb2RlY29tbWl0LlJlcG9zaXRvcnkodGhpcywgJ2Nka1BpcGVsaW5lc1JlcG8nLCB7XG4gICAgICByZXBvc2l0b3J5TmFtZTogXCJjZGtQaXBlbGluZXNSZXBvXCJcbiAgICB9KTtcblxuICAgIGNvbnN0IHBpcGVsaW5lID0gbmV3IENvZGVQaXBlbGluZSh0aGlzLCAnUGlwZWxpbmUnLCB7XG4gICAgICBwaXBlbGluZU5hbWU6ICdXb3Jrc2hvcFBpcGVsaW5lJyxcbiAgICAgIHN5bnRoOiBuZXcgQ29kZUJ1aWxkU3RlcCgnU3ludGhTdGVwJywge1xuICAgICAgICAgICAgICBpbnB1dDogQ29kZVBpcGVsaW5lU291cmNlLmNvZGVDb21taXQocmVwbywgJ21hc3RlcicpLFxuICAgICAgICAgICAgICBpbnN0YWxsQ29tbWFuZHM6IFtcbiAgICAgICAgICAgICAgICAgICducG0gaW5zdGFsbCAtZyBhd3MtY2RrJ1xuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBjb21tYW5kczogW1xuICAgICAgICAgICAgICAgICAgJ25wbSBjaScsXG4gICAgICAgICAgICAgICAgICAnbnBtIHJ1biBidWlsZCcsXG4gICAgICAgICAgICAgICAgICAnbnB4IGNkayBzeW50aCdcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgIClcbiAgICB9KTtcblxuICAgIGNvbnN0IHNlcnZlcmxlc3MgPSBuZXcgU2VydmVybGVzc1N0YWdlKHRoaXMsICdTZXJ2ZXJsZXNzU3RhZ2UnKTtcbiAgICBjb25zdCBzZXJ2ZXJsZXNzX3N0YWdlID0gcGlwZWxpbmUuYWRkU3RhZ2Uoc2VydmVybGVzcyk7XG5cbiAgICBjb25zdCBmYXJnYXRlID0gbmV3IEZhcmdhdGVTdGFnZSh0aGlzLCAnRmFyZ2F0ZVN0YWdlJyk7XG4gICAgY29uc3QgZmFyZ2F0ZV9zdGFnZSA9IHBpcGVsaW5lLmFkZFN0YWdlKGZhcmdhdGUpO1xuICB9XG59XG4iXX0=