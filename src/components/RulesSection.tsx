
import React from 'react';
import { CheckCircle, AlertCircle } from 'lucide-react';

const RulesSection = () => {
  return (
    <section className="py-16 md:py-20 relative" id="rules">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-white">CTF</span>
          <span className="ml-2 text-white">/</span>
          <span className="ml-2 text-cyber-green text-glow">RULES</span>
        </h2>
        
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2">
            <div className="cyber-box rounded-lg p-6 md:p-8">
              <h3 className="text-xl font-bold mb-6 text-cyber-green">Competition Rules</h3>
              
              <ul className="space-y-4">
                <RuleItem icon={<CheckCircle size={20} />} type="allowed">
                  Team size must be between 2 and 4 members.
                </RuleItem>
                <RuleItem icon={<CheckCircle size={20} />} type="allowed">
                  Use of publicly available tools and resources is permitted.
                </RuleItem>
                <RuleItem icon={<CheckCircle size={20} />} type="allowed">
                  Collaboration within your team is encouraged.
                </RuleItem>
                <RuleItem icon={<CheckCircle size={20} />} type="allowed">
                  You may bring your own devices for the competition.
                </RuleItem>
                <RuleItem icon={<CheckCircle size={20} />} type="allowed">
                  Ask the organizers for clarification if you have questions.
                </RuleItem>
              </ul>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <div className="cyber-box rounded-lg p-6 md:p-8">
              <h3 className="text-xl font-bold mb-6 text-cyber-green">Prohibited Actions</h3>
              
              <ul className="space-y-4">
                <RuleItem icon={<AlertCircle size={20} />} type="prohibited">
                  Attacking the competition infrastructure is strictly forbidden.
                </RuleItem>
                <RuleItem icon={<AlertCircle size={20} />} type="prohibited">
                  Sharing flags or solutions with other teams will result in immediate disqualification.
                </RuleItem>
                <RuleItem icon={<AlertCircle size={20} />} type="prohibited">
                  Any form of cheating or unethical behavior is not tolerated.
                </RuleItem>
                <RuleItem icon={<AlertCircle size={20} />} type="prohibited">
                  Interfering with other teams' ability to participate is prohibited.
                </RuleItem>
                <RuleItem icon={<AlertCircle size={20} />} type="prohibited">
                  Performing any activity that could compromise the integrity of the competition.
                </RuleItem>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12 p-6 md:p-8 bg-cyber-dark border border-cyber-green/20 rounded-lg">
          <h3 className="text-xl font-bold mb-4 text-cyber-green">CTF Guidelines</h3>
          <div className="space-y-4" id="ctf-guidelines">
            <p>The CTF will consist of various challenges across different categories, including web exploitation, cryptography, reverse engineering, binary exploitation, and more.</p>
            <p>Each challenge will have a flag in the format <code className="bg-cyber-darker text-cyber-green px-2 py-1 rounded">flag&#123;s0m3_r4nd0m_str1ng&#125;</code> that you'll need to submit to earn points.</p>
            <p>Challenges will vary in difficulty, with harder challenges worth more points. The team with the most points at the end of the competition wins!</p>
            <p>The competition will run for 8 hours, and the scoreboard will be displayed in real-time.</p>
            <p>Remember, the goal is to learn and have fun while demonstrating your cybersecurity skills!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const RuleItem = ({ icon, children, type }: { icon: React.ReactNode; children: React.ReactNode; type: 'allowed' | 'prohibited' }) => (
  <li className="flex items-start">
    <div className={`mr-3 mt-1 ${type === 'allowed' ? 'text-cyber-green' : 'text-red-500'}`}>
      {icon}
    </div>
    <span>{children}</span>
  </li>
);

export default RulesSection;
