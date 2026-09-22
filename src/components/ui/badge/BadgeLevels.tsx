import { BadgeText } from "./BadgeText";

export const BegginerBadge = () => (
  <BadgeText style={{ color: "#56e2bd", background: "#56e2bd1a" }}>
    Iniciante
  </BadgeText>
);

export const IntermediateBadge = () => (
  <BadgeText style={{ color: "#75a7ff", background: "#75a7ff1a" }}>
    Intermediário
  </BadgeText>
);

export const AdvancedBadge = () => (
  <BadgeText style={{ color: "#ff9b8c", background: "#ff9b8c1a" }}>
    Avançado
  </BadgeText>
);
