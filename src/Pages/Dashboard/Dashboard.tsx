import React from 'react';
import { Heading } from '../../Components/Text/Heading';
import { Card, CardHeader, CardBody, CardFooter, CardTitle, Row, Col } from 'reactstrap';
import { Icons } from 'library';
import 'bootstrap/dist/css/bootstrap.min.css';

export const DashBoard = () => {
	return (
		<div>
			<Heading headingText="Paska Sivu"></Heading>
			<Row>
				<Col lg="3" md="6" sm="6">
					<Card className="card-stats">
						<CardBody>
							<Row>
								<Col md="4" xs="5">
									<div className="icon-big text-center icon-warning">
										<i className="nc-icon nc-globe text-warning" />
									</div>
								</Col>
								<Col md="8" xs="7">
									<div className="numbers">
										<p className="card-category">Capacity</p>
										<CardTitle tag="p">150GB</CardTitle>
										<p />
									</div>
								</Col>
							</Row>
						</CardBody>
						<CardFooter>
							<hr />
							<div className="stats">
								<i className="fas fa-sync-alt" /> Update Now
							</div>
						</CardFooter>
					</Card>
				</Col>
				<Col lg="3" md="6" sm="6">
					<Card className="card-stats">
						<CardBody>
							<Row>
								<Col md="4" xs="5">
									<div className="icon-big text-center icon-warning">
										<span style={{ fontSize: '2rem' }}>{Icons.calendar}</span>
										<i className="nc-icon nc-money-coins text-success" />
									</div>
								</Col>
								<Col md="8" xs="7">
									<div className="numbers">
										<p className="card-category">Revenue</p>
										<CardTitle tag="p">$ 1,345</CardTitle>
										<p />
									</div>
								</Col>
							</Row>
						</CardBody>
						<CardFooter>
							<hr />
							<div className="stats">
								<i className="far fa-calendar" />
								Last day
							</div>
						</CardFooter>
					</Card>
				</Col>
				<Col lg="3" md="6" sm="6">
					<Card className="card-stats">
						<CardBody>
							<Row>
								<Col md="4" xs="5">
									<div className="icon-big text-center icon-warning">
										<i className="nc-icon nc-vector text-danger" />
									</div>
								</Col>
								<Col md="8" xs="7">
									<div className="numbers">
										<p className="card-category">Errors</p>
										<CardTitle tag="p">23</CardTitle>
										<p />
									</div>
								</Col>
							</Row>
						</CardBody>
						<CardFooter>
							<hr />
							<div className="stats">
								<i className="far fa-clock" /> In the last hour
							</div>
						</CardFooter>
					</Card>
				</Col>
				<Col lg="3" md="6" sm="6">
					<Card className="card-stats">
						<CardBody>
							<Row>
								<Col md="4" xs="5">
									<div className="icon-big text-center icon-warning">
										<i className="nc-icon nc-favourite-28 text-primary" />
									</div>
								</Col>
								<Col md="8" xs="7">
									<div className="numbers">
										<p className="card-category">Followers</p>
										<CardTitle tag="p">+45K</CardTitle>
										<p />
									</div>
								</Col>
							</Row>
						</CardBody>
						<CardFooter>
							<hr />
							<div className="stats">
								<i className="fas fa-sync-alt" /> Update now
							</div>
						</CardFooter>
					</Card>
				</Col>
			</Row>
			<Row>
				<Col lg="3" md="6" sm="6">
					<Card className="card-stats">
						<CardBody>
							<Row>
								<Col md="4" xs="5">
									<div className="icon-big text-center icon-warning">
										<i className="nc-icon nc-globe text-warning" />
									</div>
								</Col>
								<Col md="8" xs="7">
									<div className="numbers">
										<p className="card-category">Capacity</p>
										<CardTitle tag="p">150GB</CardTitle>
										<p />
									</div>
								</Col>
							</Row>
						</CardBody>
						<CardFooter>
							<hr />
							<div className="stats">
								<i className="fas fa-sync-alt" /> Update Now
							</div>
						</CardFooter>
					</Card>
				</Col>
				<Col lg="3" md="6" sm="6">
					<Card className="card-stats">
						<CardBody>
							<Row>
								<Col md="4" xs="5">
									<div className="icon-big text-center icon-warning">
										<i className="nc-icon nc-money-coins text-success" />
									</div>
								</Col>
								<Col md="8" xs="7">
									<div className="numbers">
										<p className="card-category">Revenue</p>
										<CardTitle tag="p">$ 1,345</CardTitle>
										<p />
									</div>
								</Col>
							</Row>
						</CardBody>
						<CardFooter>
							<hr />
							<div className="stats">
								<i className="far fa-calendar" /> Last day
							</div>
						</CardFooter>
					</Card>
				</Col>
				<Col lg="3" md="6" sm="6">
					<Card className="card-stats">
						<CardBody>
							<Row>
								<Col md="4" xs="5">
									<div className="icon-big text-center icon-warning">
										<i className="nc-icon nc-vector text-danger" />
									</div>
								</Col>
								<Col md="8" xs="7">
									<div className="numbers">
										<p className="card-category">Errors</p>
										<CardTitle tag="p">23</CardTitle>
										<p />
									</div>
								</Col>
							</Row>
						</CardBody>
						<CardFooter>
							<hr />
							<div className="stats">
								<i className="far fa-clock" /> In the last hour
							</div>
						</CardFooter>
					</Card>
				</Col>
				<Col lg="3" md="6" sm="6">
					<Card className="card-stats">
						<CardBody>
							<Row>
								<Col md="4" xs="5">
									<div className="icon-big text-center icon-warning">
										<i className="nc-icon nc-favourite-28 text-primary" />
									</div>
								</Col>
								<Col md="8" xs="7">
									<div className="numbers">
										<p className="card-category">Followers</p>
										<CardTitle tag="p">+45K</CardTitle>
										<p />
									</div>
								</Col>
							</Row>
						</CardBody>
						<CardFooter>
							<hr />
							<div className="stats">
								<i className="fas fa-sync-alt" /> Update now
							</div>
						</CardFooter>
					</Card>
				</Col>
			</Row>
		</div>
	);
};
