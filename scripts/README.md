Create a private repository for your app's secrets.

```
git clone https://github.com/dwidge/react-native-test-ci-secrets.git
```

Point SECRETS_PATH to your secrets repo.

```
export SECRETS_PATH=../react-native-test-ci-secrets
```

Add `release.env` to your secrets repo and fill out.

Create keystore.

```
./scripts/keystore.sh
```

Build release apk.

```
./scripts/build.sh
```

Uninstall previous debug apk on your device.
Test release apk.

```
./scripts/run.sh
```
