import { Stage, StageProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { FargateStack } from './fargate-stack';

export class FargateStage extends Stage {
  constructor(scope: Construct, id: string, props?: StageProps) {
    super(scope, id, props);

    new FargateStack(this, 'Fargate');
  }
}
