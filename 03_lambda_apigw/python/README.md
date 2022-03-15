# Welcome to your CDK Python project!
## 3- [Lambda Api Gateway]
[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/AymanZahran/CdkProjenExamples/tree/master/03_lambda_apigw)

The `cdk.json` file tells the CDK Toolkit how to execute your app.

This project is set up like a standard Python project.  The initialization process also creates
a virtualenv within this project, stored under the .venv directory.  To create the virtualenv
it assumes that there is a `python3` executable in your path with access to the `venv` package.
If for any reason the automatic creation of the virtualenv fails, you can create the virtualenv
manually once the init process completes.

To manually create a virtualenv on MacOS and Linux:

```
$ python3 -m venv .venv
```

After the init process completes and the virtualenv is created, you can use the following
step to activate your virtualenv.

```
$ source .venv/bin/activate
```

If you are a Windows platform, you would activate the virtualenv like this:

```
% .venv\Scripts\activate.bat
```

Once the virtualenv is activated, you can install the required dependencies.

```
$ pip install -r requirements.txt
```

At this point you can now synthesize the CloudFormation template for this code.

```
$ cdk synth
```

You can now begin exploring the source code, contained in the hello directory.
There is also a very trivial test included that can be run like this:

```
$ pytest
```

To add additional dependencies, for example other CDK libraries, just add to
your requirements.txt file and rerun the `pip install -r requirements.txt`
command.

## Useful commands

 * `cdk ls`          list all stacks in the app
 * `cdk synth`       emits the synthesized CloudFormation template
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk docs`        open CDK documentation

Enjoy!

## Gitpod Variables
- AWS_ACCOUNT_NUMBER: Account Number
- AWS_DEFAULT_REGION: Account Default Region
- AWS_ACCESS_KEY_ID: Account Access Key
- AWS_SECRET_ACCESS_KEY: Account Secret Key
- ENABLE_CDK_BOOTSTRAP: Enable CDK Bootstraping in Gitpod Bootstrapping (TRUE/FALSE)

## References
- [CDK Getting Started]
- [CDK API Reference]
- [CDK Workshop]
- [CDK Patterns]
- [CDK Construct Hub]
- [Projen]
- [Projen API Reference]

[CDK Getting Started]: https://docs.aws.amazon.com/cdk/v2/guide/getting_started.html
[CDK API Reference]: https://docs.aws.amazon.com/cdk/api/v2/
[CDK Workshop]: https://cdkworkshop.com/
[CDK Patterns]: https://cdkpatterns.com/
[CDK Construct Hub]: https://constructs.dev/
[Projen]: https://github.com/projen/projen
[Projen API Reference]: https://projen.io/api/API.html
[SQS & SNS]: https://github.com/AymanZahran/CdkProjenExamples/tree/master/01_sqs_sns
[Hello Lambda]: https://github.com/AymanZahran/CdkProjenExamples/tree/master/02_hello_lambda
[Lambda Api Gateway]: https://github.com/AymanZahran/CdkProjenExamples/tree/master/03_lambda_apigw
[Serverless App]: https://github.com/AymanZahran/CdkProjenExamples/tree/master/04_serverless
[Cdk Pipelines]: https://github.com/AymanZahran/CdkProjenExamples/tree/master/05_cdk_pipelines
[Fargate]: https://github.com/AymanZahran/CdkProjenExamples/tree/master/06_Fargate
[Serverless Fargate Cdk Pipeline]: https://github.com/AymanZahran/CdkProjenExamples/tree/master/07_ServerlessFargatePipeline
[Projen Serverless Fargate Cdk Pipeline]: https://github.com/AymanZahran/CdkProjenExamples/tree/master/08_ProjenServerlessFargatePipeline
