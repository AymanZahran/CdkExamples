from projen.awscdk import AwsCdkPythonApp

project = AwsCdkPythonApp(
    author_email="ah.zahran@outlook.com",
    author_name="Ayman Zahran",
    cdk_version="2.1.0",
    module_name="08_Projen",
    name="08_Projen",
    version="0.1.0",
)

project.synth()