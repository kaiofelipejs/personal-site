import React from "react";

const Contact = () => {
	const content = [
		{
			companyName: "Resultados Digitais",
			job: "Tech Recruiter",
			description:
				"Entrevistas e phone screenings, sourcing de profissionais para Produto & Engenharia, relacionamento com a comunidade de tecnologia, ações de atração em mídias e eventos, realização de briefings, job posts e melhoria contínua nos processos com foco em Candidate Experience.",
			dates: {
				startMonth: "April",
				startYear: "2018",
				endMonth: "",
				endYear: "",
			},
		},
		{
			companyName: "Softplan",
			job: "Young Apprentice to Administrative Analyst",
			description:
				"Planejamento/controle do inventário, requisições de compra, apresentação e negociação de orçamentos, automatização de planilhas e geração de indicadores. Apoio também na organização de eventos, demandas de compras e facilities, comunicação interna e onboarding de novos integrantes ao time.",
			dates: {
				startMonth: "June",
				startYear: "2015",
				endMonth: "March",
				endYear: "2018",
			},
		},
		{
			companyName: "Cimes Construtora",
			job: "Young Apprentice - Programmer",
			description:
				"A CIMES é uma das empresas apoiadoras do Programa de Aprendizagem Industrial do SENAI com auxílio para bolsistas. Minha principal responsabilidade era apresentar bons resultados das atividades desenvolvidas em sala e eventos. ",
			dates: {
				startMonth: "February",
				startYear: "2014",
				endMonth: "December",
				endYear: "2014",
			},
		},
	];

	return (
		<>
			{content.map((c) => (
				<div key={c.companyName}>
					<p>
						<strong>{c.job}</strong> | {c.companyName}
					</p>
					<span>
						{c.dates.startMonth}/{c.dates.startYear} -
						{c.dates.endMonth === ""
							? " Actual"
							: ` ${c.dates.endMonth}/${c.dates.endYear}`}
					</span>
					<p>{c.description}</p>
				</div>
			))}
		</>
	);
};

export default Contact;
