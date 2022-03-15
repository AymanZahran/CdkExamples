import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as codecommit from 'aws-cdk-lib/aws-codecommit';
import {CodeBuildStep, CodePipeline, CodePipelineSource} from "aws-cdk-lib/pipelines";
import {PipelineStage} from './pipeline-stage';

export class CdkPipelinesStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const repo = new codecommit.Repository(this, 'cdkPipelinesRepo', {
      repositoryName: "cdkPipelinesRepo"
    });

    const pipeline = new CodePipeline(this, 'Pipeline', {
      pipelineName: 'WorkshopPipeline',
      synth: new CodeBuildStep('SynthStep', {
              input: CodePipelineSource.codeCommit(repo, 'master'),
              installCommands: [
                  'npm install -g aws-cdk'
              ],
              commands: [
                  'npm ci',
                  'npm run build',
                  'npx cdk synth'
              ]
          }
      )
    });

    const deploy = new PipelineStage(this, 'Deploy');
    const deployStage = pipeline.addStage(deploy);
  }
}
