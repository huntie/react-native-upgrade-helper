import { PACKAGE_NAMES } from '../constants'

export function updateURL({
  packageName,
  language,
  isPackageNameDefinedInURL,
  fromVersion,
  toVersion,
}) {
  const url = new URL(window.location.origin)
  url.pathname = window.location.pathname
  url.hash = window.location.hash

  if (fromVersion) {
    url.searchParams.set('from', fromVersion)
  }
  if (toVersion) {
    url.searchParams.set('to', toVersion)
  }
  if (isPackageNameDefinedInURL) {
    url.searchParams.set('package', packageName)
  }
  if (packageName === PACKAGE_NAMES.RNW) {
    url.searchParams.set('language', language)
  }

  window.history.replaceState(null, null, url.toString())
}
