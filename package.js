Package.describe({
    summary: "Generate S3 upload and download policies"
});

Npm.depends({ crypto: '0.0.3' });

Package.on_use(function (api) {
    api.add_files('s3Policy.js', 'server');
    api.export("s3Policies");
});
