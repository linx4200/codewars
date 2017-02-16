// www.codewars.com/kata/51eead3461ccf7db04000017/

function UriBuilder(uri) {
  const REGX = /(^(?:https?:\/\/)?[\w.]+)\??(\w+=\w+&?)*/;
  const matches = uri.match(REGX);
  if (matches.length >= 2) {
    this.uri = matches[1];
    params = {}
    if (matches[2]) {
      matches[2].split('&').map((s) => {
        const kv = s.split('=');
        params[kv[0]] = kv[1];
      })
    }
    this.params = params;
  }
  return this;
}

UriBuilder.prototype.build = function () {
  const params = Object.keys(this.params).reduce((p, c) => {
    return `${p}${c}=${encodeURIComponent(this.params[c])}&`
  }, '?')
  return `${this.uri}${params}`.slice(0, -1);
}
