Package.describe({
    summary: "Generate S3 upload and download policies"
});

Npm.depends({ crypto: '0.0.3' });

Package.on_use(function (api) {
    api.export('s3Policies');
    api.add_files([
        's3Policy.js'
    ], 'server');
});
