import { zodResolver } from '@hookform/resolvers/zod';
import { ArticleSchema } from '@shared/api/types';
import { Button } from '@shared/ui';
import { useCreateArticle } from '@shared/ui/article-form/use-create-article';
import { schema } from '@shared/ui/article-form/zod-schema';
import cl from 'classnames';
import { FieldError, useForm } from 'react-hook-form';

import styles from './article-form.module.scss';

export function ArticleForm() {
	const {
		register,
		handleSubmit,
		getValues,
		formState: { errors, isValid },
	} = useForm<ArticleSchema>({
		defaultValues: { content: { type: 'draft' } },
		resolver: zodResolver(schema),
		mode: 'onChange',
	});

	const { onSubmit, isPending } = useCreateArticle();

	return (
		<form onSubmit={handleSubmit((data) => onSubmit(data))} className={styles.form}>
			<div className={styles.formField}>
				<label className={styles.formLabel} htmlFor={'title'}>
					Title
				</label>
				<input
					autoFocus={true}
					className={styles.formInput}
					type={'text'}
					id={'title'}
					{...register('title')}
				/>
				<span className={styles['validation-error']}>{errors.title && errors.title.message}</span>
			</div>
			<div className={styles.formField}>
				<label className={styles.formLabel} htmlFor={'type'}>
					Type
				</label>
				<select
					className={cl(styles.formInput, styles.formSelect)}
					{...register('content.type')}
					id={'type'}
				>
					<option value={'draft'}>Draft</option>
					<option value={'published'}>Published</option>
				</select>
			</div>
			{getValues('content.type') === 'published' && (
				<>
					<div className={styles.formField}>
						<label className={styles.formLabel} htmlFor={'description'}>
							Description
						</label>
						<textarea
							className={styles.formInput}
							rows={5}
							id={'description'}
							{...register('content.description')}
						/>
						<span className={styles['validation-error']}>
							{errors.content &&
								'description' in errors.content &&
								(errors.content.description as FieldError).message}
						</span>
					</div>
					<div className={cl(styles.formField, styles.row)}>
						<label className={styles.formLabel} htmlFor={'isNew'}>
							Is new?
						</label>
						<input
							className={cl(styles.formInput, styles.formCheckbox)}
							type={'checkbox'}
							id={'isNew'}
							{...register('content.isNew')}
						/>
					</div>
				</>
			)}

			<Button type={'submit'} disabled={!isValid || isPending}>
				Create article
			</Button>
		</form>
	);
}
