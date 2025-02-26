import { describe, expect, it, vi } from "vitest";
import React from "react";
import { render, screen } from "@testing-library/react";

describe("test", () => {
  it("will pass", async () => {
    expect(1).toEqual(1);
  });
  it("might pass", async () => {
    expect(1700 * 7).toBeGreaterThan(1);
  });
});
