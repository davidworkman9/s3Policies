## s3Policies

This package is a Meteor smart package wrapper of this NPM module:

* https://github.com/davidworkman9/s3policy  which is forked from https://github.com/cwintzer/s3policy

As far as I can tell the original is abandoned and was left with a pretty serious bug(couldn't create policies for downloading files with spaces). I fixed this issue and wrapped it as a meteor package.

## Creating Write Policies

```
var MAXIMUM_MB = 10, SECONDS_BEFORE_TIMEOUT = 60;
var s3 = new s3Policies('AWS_KEY', 'AES_SECRET_KEY');
var policy = s3.writePolicy('LOCATION', 'BUCKET', SECONDS_BEFORE_TIMEOUT, MAXIMUM_MB);
```

## Creating Read Policies

```
var SECONDS_BEFORE_TIMEOUT = 60;
var s3 = new s3Policies('AWS_KEY', 'AES_SECRET_KEY');
var url = s3.readPolicy('LOCATION', 'BUCKET', SECONDS_BEFORE_TIMEOUT, 'FORCE_FILENAME_(OPTIONAL)');
```

