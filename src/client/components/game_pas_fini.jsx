const STATUS_TODO = 'STATUS_TODO';
			const STATUS_DOING = 'STATUS_DOING';
			const STATUS_DONE = 'STATUS_DONE';
			
			const STATUS_CODE = {
				STATUS_DOING: 'mosnters',
        STATUS_TODO: 'liste de cards',
			}
			let cards = [{
				id: 0,
				status: STATUS_TODO,
				title: 'soin',
				username: '┑(￣Д ￣)┍',
				point: 1
			}, {
				id: 1,
				status: STATUS_TODO,
				title: 'defend',
				username: '┑(￣Д ￣)┍',
				point: 1
			}, {
				id: 2,
				status: STATUS_TODO,
				title: 'defend',
				username: '┑(￣Д ￣)┍',
				point: 1
			}, {
				id: 3,
				status: STATUS_TODO,
				title: 'attack simple',
				username: '┑(￣Д ￣)┍',
				point: 1
			}, {
				id: 4,
				status: STATUS_TODO,
				title: 'attack fort',
				username: '┑(￣Д ￣)┍',
				point: 2
			}]
			
			class TaskItem extends React.Component {
				handleDragStart = (e) => {
					this.props.onDragStart(this.props.id);
				}
				render() {
					let { id, title, point, username, active, onDragEnd } = this.props;
					return (
						<div 
							onDragStart={this.handleDragStart}
							onDragEnd={onDragEnd}
							id={`item-${id}`} 
							className={'item' + (active ? ' active' : '')}
							draggable="true"
						>
							<header className="item-header">
								<span className="item-header-username">{username}</span>
								<span className="item-header-point">{point}</span>
							</header>
							<main className="item-main">{title}</main>
						</div>
					);
				}
			}
			
			class CardRow extends React.Component {
				state = {
					in: false
				}
				handleDragEnter = (e) => {
					e.preventDefault();
					if (this.props.canDragIn) {
						this.setState({
							in: true
						})
					}
				}
				handleDragLeave = (e) => {
					e.preventDefault();
					if (this.props.canDragIn) {
						this.setState({
							in: false
						})
					}
				}
				handleDrop = (e) => {
					e.preventDefault();
					this.props.dragTo(this.props.status);
					this.setState({
						in: false
					})
				}
				render() {
					let { status, children } = this.props;
					return (
						<div 
							id={`row-${status}`} 
							className={'row'}
							onDragEnter={this.handleDragEnter}
							onDragLeave={this.handleDragLeave}
							onDragOver={this.handleDragEnter}
							onDrop={this.handleDrop}
						>
							<main className={'row-main' + (this.state.in ? ' active' : '')}>
								{children}
							</main>
						</div>
					);
				}
			}
			
			class App extends React.Component {
				state = {
					cards: cards,
					activeId: null
				}
				/**
				 * 传入被拖拽任务项的 id
				 */
				onDragStart = (id) => {
					this.setState({
						activeId: id
					})
				}
				
				dragTo = (status) => {
					let { cards,  activeId} = this.state;
					let card = cards[activeId];
					if (card.status !== status) {
						card.status = status;
						this.setState({
							cards: cards
						})
					}
					this.cancelSelect();
				}
				
				cancelSelect = () => {
					this.setState({
						activeId: null
					})
				}
				
				render() {
					let { cards, activeId } = this.state;
					let { onDragStart, onDragEnd, cancelSelect } = this;
					return (
						<div className="task-wrapper">
							{
								Object.keys(STATUS_CODE).map(status => 
									<CardRow 
										status={status} 
										key={status} 
										dragTo={this.dragTo}
										canDragIn={activeId !== null && cards[activeId].status !== status}>
										{ cards.filter(t => t.status === status).map(t => 
											<TaskItem
												key={t.id}
												active={t.id === activeId}
												id={t.id}
												title={t.title} 
												point={t.point} 
												username={t.username}
												onDragStart={onDragStart}
												onDragEnd={cancelSelect}
											/>)
										}
									</CardRow>
								)
							}
						</div>
					)
				}
			}
			
			ReactDOM.render(
				<App />,
				document.getElementById('app')
			);