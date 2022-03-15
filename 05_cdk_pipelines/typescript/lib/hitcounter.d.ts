import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';
export interface HitCounterProps {
    downstream: lambda.IFunction;
}
export declare class HitCounter extends Construct {
    readonly handler: lambda.Function;
    constructor(scope: Construct, id: string, props: HitCounterProps);
}
