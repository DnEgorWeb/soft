import React from 'react';
import Form from '../Form';
import {
	ModalWrap,
	Modal,
	ModalInner
} from './styled-components';

export default ({
	                isModalOpen,
	                lang,
	                handleInput,
	                username,
	                email,
	                phone,
	                message
                }) => {
	return (
		<ModalWrap>
			<Modal isOpen={isModalOpen}>
				<ModalInner>
					<div className='grid'>
						<Form
							small
							id='modal'
							username={username}
							email={email}
							phone={phone}
							message={message}
							handleInput={handleInput}
							lang={lang}
							text={{
								ru: [
									`Мы готовы предоставить Вам одно из проверенных решений или предложить
									особый подход в решении задач, стоящих перед вами.`,
									<br key={ 978456496 }/>,
									<br key={ 978456497 }/>,
									`Задайте нам вопрос или расскажите о ваших задачах.`
								],
								en: [
									`We are ready to provide you with one of the proven solutions or to offer
									a special approach in solving the problems facing you.`,
									<br key={ 5645894651 }/>,
									<br key={ 5645894551 }/>,
									`Ask us a question or tell us about your tasks.`
								]
							}}
						/>
					</div>
				</ModalInner>
			</Modal>
		</ModalWrap>
	);
};
