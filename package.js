Package.describe({
    summary: "Generate S3 upload and download policies",
    version: "0.0.7",
    name: "mrt:s3policies",
    git: "https://github.com/davidworkman9/s3Policies.git"
});

Package.on_use(function (api) {
    api.export('s3Policies');
    api.add_files([
        's3Policy.js'
    ], 'server');

    if(api.versionsFrom) {
        api.versionsFrom("METEOR@0.9.0");
    }
});
