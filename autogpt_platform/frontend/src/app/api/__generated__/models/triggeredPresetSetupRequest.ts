/**
 * Generated by orval v7.10.0 🍺
 * Do not edit manually.
 * AutoGPT Agent Server
 * This server is used to execute agents that are created by the AutoGPT system.
 * OpenAPI spec version: 0.1
 */
import type { TriggeredPresetSetupRequestTriggerConfig } from "./triggeredPresetSetupRequestTriggerConfig";
import type { TriggeredPresetSetupRequestAgentCredentials } from "./triggeredPresetSetupRequestAgentCredentials";

export interface TriggeredPresetSetupRequest {
  name: string;
  description?: string;
  graph_id: string;
  graph_version: number;
  trigger_config: TriggeredPresetSetupRequestTriggerConfig;
  agent_credentials?: TriggeredPresetSetupRequestAgentCredentials;
}
