import { ServerlessStack } from './serverless-stack';
import { Stage, StageProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';

export class ServerlessStage extends Stage {
    constructor(scope: Construct, id: string, props?: StageProps) {
        super(scope, id, props);

        new ServerlessStack(this, 'ServerlessApp');
    }
}
