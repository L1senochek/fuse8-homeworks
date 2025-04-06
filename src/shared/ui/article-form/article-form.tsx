import { zodResolver } from '@hookform/resolvers/zod';
import { articleAPI } from '@shared/api/article-api';
import { Button } from '@shared/ui';
import { schema } from '@shared/ui/article-form/zod-schema';
import { useMutation } from '@tanstack/react-query';
import cl from 'classnames';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { z } from 'zod';

import styles from './article-form.module.scss';

export function ArticleForm() {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm({
		defaultValues: { content: { type: 'draft' } },
		resolver: zodResolver(schema),
		mode: 'onChange',
	});

	const navigate = useNavigate();

	const { isPending, mutate } = useMutation({
		mutationKey: ['createArticle'],
		mutationFn: articleAPI.createArticle,
		onSuccess: () => {
			navigate('/articles');
		},
	});

	function onSubmit(data: z.infer<typeof schema>) {
		mutate(data);
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
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
					{errors.content?.description && errors.content.description.message}
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

			<Button type={'submit'} disabled={!isValid || isPending}>
				Create article
			</Button>
		</form>
	);
}
