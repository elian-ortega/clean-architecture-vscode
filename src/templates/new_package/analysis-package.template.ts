export function getAnalysisOptionsTemplate(): string {
    return getDefaultAnalysisOptionsTemplate();
}

function getDefaultAnalysisOptionsTemplate(): string {

  return `# Very Good Dart analyzer settings and best practices 
# used internally at Very Good Ventures.
# For more info, see https://pub.dev/packages/very_good_analysis.
include: package:very_good_analysis/analysis_options.yaml

# For lint rules and documentation, see http://dart-lang.github.io/linter/lints.
# Uncomment to specify additional rules.
# linter:
#   rules:
#     - camel_case_types

analyzer:
  exclude:
    - "*/.g.dart"
    - "*/.freezed.dart"`;
}
