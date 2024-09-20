import type { BaseMetadata } from '../../types/index.ts';

/**
 * Title action type.
 */
export interface TitleAction<TInput, TTitle extends string>
  extends BaseMetadata<TInput> {
  /**
   * The action type.
   */
  readonly type: 'title';
  /**
   * The action reference.
   */
  readonly reference: typeof title;
  /**
   * The title text.
   */
  readonly title: TTitle;
}

/**
 * Creates a title metadata action.
 *
 * @param title_ The title text.
 *
 * @returns A title action.
 */
export function title<TInput, TTitle extends string>(
  title_: TTitle
): TitleAction<TInput, TTitle> {
  return {
    kind: 'metadata',
    type: 'title',
    reference: title,
    title: title_,
  };
}