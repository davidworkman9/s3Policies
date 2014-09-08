Package.describe({
    name: "mrt:meteor-editable",
    summary: "Generate S3 upload and download policies",
    version: "0.0.6",
    git: "https://github.com/davidworkman9/s3Policies.git"
});

Package.on_use(function (api) {
  api.versionsFrom("METEOR@0.9.0");
    api.export('s3Policies');
    api.add_files([
        's3Policy.js'
    ], 'server');
});
