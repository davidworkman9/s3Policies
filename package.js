Package.describe({
    summary: "Generate S3 upload and download policies"
});

Package.on_use(function (api) {
    api.export('s3Policies');
    api.add_files([
        's3Policy.js'
    ], 'server');
});
