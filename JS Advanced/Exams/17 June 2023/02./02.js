class JobOffers {
    constructor(employer, position) {
        this.employer = employer;
        this.position = position;
        this.jobCandidates = [];
    }

    jobApplication(candidates) {
        const addedCandidates = [];
        candidates.forEach(candidate => {
            const [name, education, yearsExperience] = candidate.split('-');
            const existingCandidate = this.jobCandidates.find(c => c.name === name);

            if (existingCandidate) {
                if (Number(existingCandidate.yearsExperience) < Number(yearsExperience)) {
                    existingCandidate.yearsExperience = yearsExperience;
                }
            } else {
                this.jobCandidates.push({ name, education, yearsExperience });
                addedCandidates.push(name);
            }
        });

        return `You successfully added candidates: ${addedCandidates.join(', ')}.`;
    }

    jobOffer(chosenPerson) {
        const [name, minimalExperience] = chosenPerson.split('-');
        const candidate = this.jobCandidates.find(c => c.name === name);

        if (!candidate) {
            throw new Error(`${name} is not in the candidates list!`);
        }

        if (Number(candidate.yearsExperience) < Number(minimalExperience)) {
            throw new Error(`${name} does not have enough experience as ${this.position}, minimum requirement is ${minimalExperience} years.`);
        }

        candidate.yearsExperience = 'hired';
        return `Welcome aboard, our newest employee is ${name}.`;
    }

    salaryBonus(name) {
        const candidate = this.jobCandidates.find(c => c.name === name);

        if (!candidate) {
            throw new Error(`${name} is not in the candidates list!`);
        }

        if (candidate.education === 'Bachelor') {
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $50,000 per year!`;
        } else if (candidate.education === 'Master') {
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $60,000 per year!`;
        } else {
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $40,000 per year!`;
        }
    }

    candidatesDatabase() {
        if (this.jobCandidates.length === 0) {
            throw new Error('Candidate Database is empty!');
        }

        const sortedCandidates = this.jobCandidates.slice().sort((a, b) => a.name.localeCompare(b.name));
        const candidateInfo = sortedCandidates.map(c => `${c.name}-${c.yearsExperience}`).join('\n');

        return `Candidates list:\n${candidateInfo}`;
    }
}

let Jobs = new JobOffers("Google", "Strategy Analyst");
console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", "Jordan Cole-High School-5", "Daniel Jones- Bachelor-18"]));
console.log(Jobs.jobOffer("John Doe-8"));
console.log(Jobs.jobOffer("Peter Parker-4"));
console.log(Jobs.jobOffer("Jordan Cole-4"));
console.log(Jobs.salaryBonus("Jordan Cole"));
console.log(Jobs.salaryBonus("John Doe"));
console.log(Jobs.candidatesDatabase());
